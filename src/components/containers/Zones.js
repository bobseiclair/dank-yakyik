import React, { Component } from 'react'

import Zone from "../presentation/Zone"
import superagent from "superagent"

class Zones extends Component {
    constructor(){
        super();
        this.state = {
            list: [],

             zone : {
               name: '',
               location: [],
               zipCodes: [],
               timestamp:""
             }
        }
    }

    componentDidMount(){
        console.log("Component Did Mount..")

        superagent
          .get('/api/zone')
          .query(null)
          .set('Accept', 'application/json')
          .end((err, res) => {
            if (err){
              alert("erreur "+err)
              return
            }
            console.log(JSON.stringify(res.body))

            let results = res.body.results
            this.setState({
              list: results
            })
          })
    }

    updateZone(e){
      console.log("updateZoneName: "+e.target.id+" == " +e.target.value)
      let updatedZone = Object.assign({}, this.state.zone)
      updatedZone[e.target.id] = e.target.value

      this.setState({
        zone: updatedZone
      })
    }

    addZone(){
      console.log('Ajout de la Zone: '+JSON.stringify(this.state.zone))
      let updatedList = Object.assign([], this.state.list)
      updatedList.push(this.state.zone)
      this.setState({
        list: updatedList
      })
    }

    render() {
        const listItems = this.state.list.map((zone, i) => {
            return <li key={i}><Zone laZone = {zone}/></li>
        })

        return (
            <div>
                <ol>
                    {listItems}
                </ol>
                <input
                    id="name"
                    onChange={this.updateZone.bind(this)}
                    className="form-control"
                    type="text"
                    placeholder="Nom de la zone"
                />
                <br />
                <input
                    id="zipCode"
                    onChange={this.updateZone.bind(this)}
                    className="form-control"
                    type="text"
                    placeholder="ZiP Code.."
                />
                <br />
                <button
                  onClick={this.addZone.bind(this)}
                  className="btn btn-danger" >
                    Ajout Une Zone
                </button>

            </div>
        )
    }
}

export default Zones
