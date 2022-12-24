import Link from 'next/link'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

export default function Routes() {
  return (
   <div>
     <Link href="/Login">
      {<Login />}
    </Link>
    <Link href="/SignUp">
      <SignUp />
    </Link>
   </div>
  )
}