
type Props = {
  projectsRef: React.RefObject<HTMLDivElement>
}

const Projects = ({projectsRef}: Props) => {
  return (
    <section ref={projectsRef} className="w-full h-screen">
      project
    </section>
  )
}

export default Projects