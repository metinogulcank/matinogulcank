import React, { useState } from 'react'
import { useEffect } from 'react';
import { projectsData } from './Data'
import { projectsNav } from './Data'
import WorkItems from './WorkItems';

const Works = () => {
  const [item,setItem] = useState({name:'all'});
  const [projects, setProject] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() =>{
    if(item.name === "all"){
      setProject(projectsData);
    } 
    else{
      const newProject = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProject(newProject);
    }
  },[item]);

  const handleClick = (e,index) => {
    setItem({name: e.target.textContent});  
    setActive(index);
  }
  return (
    <div>
      <div className='work_filters'> {
        projectsNav.map((item,index) => {
          return (
          <span onClick={(e) => handleClick(e,index)} className={`${active===index ? 'active-work' : ''}'work_item'`} key={index}>{item.name}</span>
          );
      })}
      </div>

      <div className='work_container container grid'>
        {projectsData.map((item) => {
          return <WorkItems item={item} key={item.id} />
        })}
      </div>
    </div>
  );
};

export default Works