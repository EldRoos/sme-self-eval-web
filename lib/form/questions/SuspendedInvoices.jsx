import React from 'react'
import { YesNoQuestion } from '../../components'

export default () => {
  return (
    <div className="row">
      <YesNoQuestion
        className="col"
        headline="Ansökt om att få betala leverantörsfakturor senare?" />
    </div>
  )
}
