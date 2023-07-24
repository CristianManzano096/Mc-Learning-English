import { Navbar, Sidebar } from "./organisms";
import { HomePage } from "./pages";
import { HomeLayout } from './templates/HomeLayout';

export const McApp = () => {

  return (
    <>
      <HomeLayout>
        <HomePage />
      </HomeLayout>
    </>
  )
}
