interface HomeProps {
  id: number
  login: string
  name: string
  location: string
  bio: string
}

export const GitHubProfile = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await fetch('https://api.github.com/users/moutinhofuturedev')
  const data: HomeProps = await response.json()

  return (
    <ul className="mt-4">
      <li>
        Id e login: {data.id} | {data.login}
      </li>
      <li>{data.name}</li>
      <li>{data.location}</li>
      <li>{data.bio}</li>
    </ul>
  )
}
