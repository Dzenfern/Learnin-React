
import Card from './components/Card'

function App() {
  const users = [
    {
      username: "dylan",
      company: "Edgeverve",
      jobRole: "Product Engineer",
      profilePic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Y6EUmMhsGlYwrkag2ppmNAHaJ3%3Fpid%3DApi&f=1&ipt=ff2715dd90b1ec69aab52c5be1bf9d75109aed9faf164ba1ef5278932044dfd0&ipo=images"
    },
    {
      username: "alex",
      company: "Contoso",
      jobRole: "Frontend Developer",
    },
    {
      username: "sam",
      company: "Fabrikam",
      jobRole: "UX Designer",
    }
  ]
  return (
    <main className="min-h-screen bg-[#202020] px-4 pt-6 font-sans">
      {users.map((user) => (
        <Card key={user.username} {...user} />
      ))}
    </main>
  )
}

export default App
