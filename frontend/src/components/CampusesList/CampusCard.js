import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getCampusList } from '../../store/campus';
import './CampusContainer.css'

const CampusCard = () => {
    const dispatch = useDispatch()
    const campuses = useSelector(state => {
        return Object.values(state.campus)
    })

    useEffect(() => {
        dispatch(getCampusList())
    }, [dispatch])

    return campuses.map((campus) => (
      <div key={campus.id}>
          <div>
              <a href={`/campus/${campus.id}`} id='campus-name'>{campus.name}</a>
              <br></br>
              {campus.city}
              {campus.state}
          </div>
          <br></br>
      </div>
    ))
}

export default CampusCard
