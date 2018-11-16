import React, {Component} from 'react';
import CustomModal from '../components/CustomModal'
import ProjectInfo from '../components/ProjectInfo'

class DaySquare extends Component {
  state = {
    isModalOpen: false
  }

  openModal() {
   this.setState({ isModalOpen: true })
 }

 closeModal() {
   this.setState({ isModalOpen: false })
 }

  render(){
    return(
      <div className ="day-square">
        <img className ="day-square-img" src={this.props.project.img} alt="project image" onClick={() => this.openModal()}/>
        <CustomModal isOpen={this.state.isModalOpen} onClose={() => this.closeModal}>
          <ProjectInfo project={this.props.project}/>
          <p><button onClick={() => this.closeModal()}>Close</button></p>
        </CustomModal>
      </div>
    )
  }
}

export default DaySquare
