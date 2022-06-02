import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getCampusList } from '../../store/campus';
import AddCampusForm from '../AddCampusForm';
import CampusCard from './CampusCard';
import './CampusContainer.css'

const CampusList = () => {

    return (
      <div className='campus-container'>
            <CampusCard />
            <a href='/campus/new'>
                Add a Campus
            </a>
      </div>
    )
}

export default CampusList
