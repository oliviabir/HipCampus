const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { currentUser } = require('../../utils/auth')
const { Booking, Campus } = require('../../db/models');



const router = express.Router();

// GET all Bookings

router.get('/', asyncHandler(async (req, res) => {
    const user = currentUser(req)

    const bookings = await Booking.findAll({
        where: {
            userId: user.id,
        },
        include: Campus
    })

    return res.json(bookings)
}))

// GET Booking by Id

router.get('/:bookingId(\\d+)', asyncHandler(async (req,res) => {
    const bookingId = req.params.bookingId

    const booking = await Booking.findByPk(bookingId)

    return res.json(booking)
}))

const bookingValidators = [
    check('tourDate')
        .exists({ checkFalsy: true})
        .withMessage('Please enter a tour date'),
    handleValidationErrors
]

// CREATE a Booking

router.post('/new', bookingValidators, asyncHandler(async (req, res) => {
    const {
        userId,
        campusId,
        campusName,
        campusCity,
        campusState,
        tourDate,
    } = req.body

    const booking = await Booking.create({
        userId,
        campusId,
        campusName,
        campusCity,
        campusState,
        tourDate,
    })

    return res.json(booking)
}))

// DELETE a Booking

router.delete('/:bookingId', asyncHandler(async (req, res) => {
    const bookingId = req.params.bookingId

    const booking = await Booking.findByPk(bookingId)

    if (booking) {
        await booking.destroy()
        return res.json(booking.id)
    } else {
        throw new Error('Booking not found')
    }
}))


module.exports = router
