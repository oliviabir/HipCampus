const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');

const { Campus, Image } = require('../../db/models');

const router = express.Router();

// GET list of Campuses

router.get('/', asyncHandler(async(req, res) => {

    const campuses = await Campus.findAll({
        include: Image
    })

    return res.json(campuses)
}))

// GET Campus by id

router.get('/:campusId(\\d+)', asyncHandler(async(req, res) => {
    const campusId = req.params.campusId

    const campus = await Campus.findByPk(campusId, {
        include: [{
            model: Image,
            where: {
                campusId: campusId
            }
        }]
    })

    return res.json(campus)
}))

const campusValidators = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Name')
        .isLength({ max: 100 })
        .withMessage('Name must not be longer than 100 characters'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for City')
        .isLength({ max: 50 })
        .withMessage('Name must not be longer than 50 characters'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for State')
        .isLength({ max: 50 })
        .withMessage('Name must not be longer than 50 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Description'),
    check('tuition')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Tuition'),
    handleValidationErrors
]

// Add a Campus

router.post('/new', campusValidators, asyncHandler(async (req, res) => {

    const {
        userId,
        name,
        city,
        state,
        description,
        tuition,
        url,
        alt
    } = req.body

    const campus = await Campus.create({
        userId,
        name,
        city,
        state,
        description,
        tuition
    })

    const image = await Image.create({
        campusId: campus.id,
        url,
        alt
    })

    const campusWithImage = await Campus.findByPk(campus.id, {
        include: Image
    })

    return res.json(campusWithImage)
}))

// EDIT a Campus

router.put('/:id', campusValidators, asyncHandler(async (req, res) => {
    const id = req.params.id

    await Campus.update(req.body, {
        where: { id }
    })

    const campus = await Campus.findByPk(id)
    return res.json(campus)
}))

// DELETE a Campus

router.delete('/:campusId', asyncHandler(async (req, res) => {
    const campusId = req.params.campusId

    const campus = await Campus.findByPk(campusId)

    if (campus) {
        await campus.destroy()
        return res.json(campus.id)
    } else {
        throw new Error('Campus not found')
    }
}))

module.exports = router;
