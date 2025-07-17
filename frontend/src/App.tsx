import Container from "@components/layout/Container"
import { ArrowDown, ArrowRight } from "lucide-react"
import Button from "@components/ui/Button"
import Title from "@components/ui/Title"
import useGithub from "@hooks/useGithub"

function App() {
  const { data } = useGithub({ url: "/users/Lucas-R" });

  console.log(data);

  return (
    <>
      <header className="w-full h-screen bg-dark">
        <Container className="h-full flex items-center">
          <div className="w-full">
            <Title className="text-white mb-16">
              Coding a Better<br />
              <span className="font-extralight">World Today</span>
            </Title>
            <p className="text-light font-light max-w-[31.25rem] mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi repellendus, voluptatum assumenda doloribus est porro nemo illum.
              Laboriosam neque ullam, impedit, deserunt ut ab quod ipsa dicta,
              unde odit necessitatibus.
            </p>
            <div className="w-full flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2 max-w-[31.25rem]">
                <Button>
                  Lucas Rodrigues
                  <div className="w-10 h-10 flex items-center justify-center bg-dark rounded-full duration-500 group-hover:scale-120">
                    <ArrowRight className="size-6 text-white" />
                  </div>
                </Button>
                <Button thema="transparent" className="text-white">
                  Ver Projetos
                  <div className="w-10 h-10 flex items-center justify-center bg-light rounded-full duration-500 group-hover:scale-120">
                    <ArrowRight className="size-6 text-dark" />
                  </div>
                </Button>
              </div>

              <div className="items-center justify-center gap-2 hidden md:flex">
                <p className="text-sm text-light">Continuar explorando</p>
                <Button className="text-white pl-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-dark rounded-full duration-500 group-hover:scale-120">
                    <ArrowDown className="size-6 text-light" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </Container >
      </header>

      <section>
        <Container className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <Title as="h2" level="h2" className="text-center mb-10 md:text-left">
              Who is the <br />
              <span className="font-extralight">Developer?</span>
            </Title>
            <p className="text-justify font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi repellendus, voluptatum assumenda doloribus est porro nemo illum.
              Laboriosam neque ullam, impedit, deserunt ut ab quod ipsa dicta,
              unde odit necessitatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi repellendus, voluptatum assumenda doloribus est porro nemo illum.
              Laboriosam neque ullam, impedit, deserunt ut ab quod ipsa dicta,
              unde odit necessitatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi repellendus, voluptatum assumenda doloribus est porro nemo illum.
              Laboriosam neque ullam, impedit, deserunt ut ab quod ipsa dicta,
              unde odit necessitatibus.
            </p>
          </div>
          <div>

          </div>
        </Container>
      </section>
    </>
  )
}

export default App