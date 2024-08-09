import { useContext, useEffect, useState } from 'react'

import styles from './page.module.css'

import TableComponent from '@/components/table.component'
import { VesselsContext } from '@/utils/contexts/vessels-context'

export default function Home() {

  return (
    <main className="light">
      <TableComponent>
      </TableComponent>
    </main>
  )
}
