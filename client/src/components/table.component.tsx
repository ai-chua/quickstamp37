'use client'

import { getKeyValue } from '@nextui-org/react'
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell } from '@nextui-org/table'
import { useContext } from 'react'

import { VesselsContext, VesselsData } from '@/utils/contexts/vessels-context'
import { VesselInformation } from '@/utils/types'

export default function TableComponent() {
  const { vessels } = useContext(VesselsContext)


  // Convert object values to an array
  const vesselArray = Object.values(vessels)

  // Check if the array is empty
  const isEmpty = vesselArray.length === 0

  const columns = [
  {
    key: 'imo',
    label: 'IMO'
  },
  {
    key: 'lat',
    label: 'LAT'
  },
  {
    key: 'lng',
    label: 'LNG'
  },
  {
    key: 'destination',
    label: 'DEST'
  }
]

  return (
    <>
      <Table aria-label="Example static collection table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={'No data to display'} items={vesselArray}>
        {(item) => (
          <TableRow key={item.imo}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>    
    </>
  )
}