import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getCampus, deleteCampus } from '../../store/campus';
import AddBookingForm from '../AddBookingForm';
import CampusImageDetail from '../CampusImageDetail'
import EditCampusForm from '../EditCampusForm';
import './CampusPage.css'

const CampusDetail = () => {
    const { campusId } = useParams()
    const campusObj =  useSelector(state => state.campus)
    const campus = campusObj.campus

    console.log(campusObj[campusId], 'CAMPUSOBJ.CAMPUSID')
    console.log(campusObj, 'THIS IS CAMPUS OBJ')
    console.log(campusId, 'THIS IS CAMPUS ID')
    console.log(campus, 'THIS IS CAMPUS')

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getCampus(campusId))
    }, [dispatch])


    const handleDelete = async (e) => {
      console.log('HANDLE DELETE HITTT')
      e.preventDefault()

      let campusDelete = await dispatch(deleteCampus(campusId))
      console.log('DISPATCHED DELETE')
      console.log(campusDelete, 'CAMPUS DELETE HIT')
      if (campusDelete) {
        return history.push('/campus')
      }
    }

  return (
    <>
      {
        campus ?
        <div className='campus-detail-container'>
            <h1>{campus.name}</h1>
            <h4>{campus.city}, {campus.state}</h4>
            <h3>Tuition: ${campus.tuition}</h3>
            {/* add in state tuition and private or public --- if statements? */}
            <div>
              <CampusImageDetail campusId={campusId}/>
            </div>
            <h2>Description</h2>
            <div>{campus.description}</div>
            <AddBookingForm campus={campus}/>
            <Link to='/bookings'>Book a Tour</Link>
            <EditCampusForm campus={campus} />
            <button onClick={handleDelete}>
              Delete Campus
            </button>
        </div>
        :null
      }
    </>
  )
}

export default CampusDetail
