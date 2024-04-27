const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <strong className="text-2xl font-bold">Logo do APP</strong>
      <div>{children}</div>
    </div>
  )
}

export default AuthLayout
