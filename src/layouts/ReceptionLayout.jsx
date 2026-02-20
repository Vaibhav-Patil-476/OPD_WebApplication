function ReceptionLayout(){

    return(
        <div>
      <SideBar/>
        <main>
          <div className='Container-fluid'>
           <Outlet/>
          </div>
        </main>
    </div>
    )
}export default ReceptionLayout;
