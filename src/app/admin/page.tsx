const Admin = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="min-h-screen">
      <h1>Admin</h1>
    </div>
  )
}

export default Admin
