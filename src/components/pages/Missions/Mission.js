/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { joinMission, leaveMission } from '../../../redux/missions/missions';

export default function Mission(props) {
  const { missions } = props;
  const dispatch = useDispatch();
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions
         && missions.map((mission) => (
           <tr key={mission.id}>
             <td>{mission.missionName}</td>
             <td>{mission.description}</td>
             <td>
               {!mission.reserved
                 ? <Badge bg="secondary">Not A Member</Badge>
                 : <Badge bg="primary">Active Member</Badge>}
             </td>
             <td>
               {mission.reserved
                 ? <Button variant="outline-danger" onClick={() => dispatch(leaveMission(mission.id))}>Leave Mission</Button>
                 : <Button variant="outline-secondary" onClick={() => dispatch(joinMission(mission.id))}>Join Mission</Button>}
             </td>
           </tr>
         ))}

      </tbody>
    </Table>
  );
}
