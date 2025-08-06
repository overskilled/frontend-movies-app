import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Search,
  Star,
  Twitter,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState, type ChangeEvent } from "react";
import { NavLink } from "react-router-dom";
import Footer from "@/components/mine/Footer";

interface Movie {
  title: string;
  poster: string;
  imdb: { rating: number };
  plot: string;
}

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const [searchL, setSearchL] = useState<Movie[]>([]);
  const [comedyL, setComedyL] = useState<Movie[]>([]);
  const [musicL, setMusicL] = useState<Movie[]>([]);
  const [carouselL, setCarouselL] = useState<Movie[]>([]);

  useEffect(() => {
    const getBibliotheque = async () => {
      try {
        const res = await fetch(
          `https://backend-movie-api-afne.onrender.com/movies?page=1&limit=25`
        );
        const resJson = await res.json();
        const liste: Movie[] = resJson.data;
        console.log(liste)
        setCarouselL(liste); 
      } catch (err) {
        console.log(err);
      }
    };

    getBibliotheque();
  }, []);
  useEffect(() => {
    const getBibliotheque = async () => {
      try {
        const res = await fetch(
          `https://backend-movie-api-afne.onrender.com/movies/filter?page=2&limit=10&column=genres&value=${selectedGenre}`
        );
        const resJson = await res.json();
        const liste: Movie[] = resJson.data;
        setSearchL(liste); // met à jour l'état
      } catch (err) {
        console.log(err);
      }
    };

    getBibliotheque();
  }, [selectedGenre]);

  // observe la valeur mise à jour
  useEffect(() => {
    console.log("Nouvelle valeur de searchL :", searchL);
  }, [searchL]);

  useEffect(() => {
    setSearchL(searchL.filter((movie) => movie.plot.includes(inputValue)));
  }, [inputValue]);

  useEffect(() => {
    try {
      const getCommedyMovie = async () => {
        const res = await fetch(
          `https://backend-movie-api-afne.onrender.com/movies/filter?page=2&limit=10&column=genres&value=Comedy`
        );
        const resJson = await res.json();
        const liste: Movie[] = resJson.data;
        setComedyL(liste);
        console.log(resJson);
      };
      getCommedyMovie();
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    try {
      const getCommedyMovie = async () => {
        const res = await fetch(
          `https://backend-movie-api-afne.onrender.com/movies/filter?page=2&limit=10&column=genres&value=Music`
        );
        const resJson = await res.json();
        const liste: Movie[] = resJson.data;
        setMusicL(liste);
        console.log(resJson);
      };
      getCommedyMovie();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  // const [api, setApi] = useState<CarouselApi>();
  // console.log(api)
  return (
    <div className="flex flex-col w-full px-4 pb-2 h-screen">
      <div className="flex flex-col w-full overflow-y-auto h-full scrollbar-none relative  ">
        {/* header */}
        <header className='w-full h-auto bg-[url("/header.jpg")] flex flex-col relative'>
          {/* nav bar */}
          <div className="flex justify-between items-center my-5 bg-transparent ">
            <img src="/iconeHeader.png" alt="logo" />
            <div className="flex gap-2">
              <NavigationMenu>
                <NavigationMenuList className="gap-4 *:text-md *:font-semibold *:uppercase *:hover:text-white *:text-gray-300 *:hover:underline *:hover:underline-offset-8 *:duration-500">
                  <NavigationMenuItem>
                    <NavLink className={({ isActive }: { isActive: boolean }) => isActive ? " underline underline-offset-8":""} to="/">home</NavLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavLink className={({ isActive }: { isActive: boolean }) => isActive ? " underline underline-offset-8":""} to="/movies">movies</NavLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavLink className={({ isActive }: { isActive: boolean }) => isActive ? " underline underline-offset-8":""} to="/celebrities">celebrities</NavLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavLink className={({ isActive }: { isActive: boolean }) => isActive ? " underline underline-offset-8":""} to="/news">news</NavLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavLink className={({ isActive }: { isActive: boolean }) => isActive ? " underline underline-offset-8":""} to="/commity">community</NavLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex gap-2 *:text-gray-300">
              <Button className="bg-transparent rounded-full hover:scale-105 hover:bg-red-700 transition cursor-pointer duration-300 ease-in-out">
                <NavLink to="">LOG IN</NavLink>
              </Button>
              <Button className="bg-red-700 rounded-full hover:scale-105 hover:bg-transparent transition cursor-pointer duration-300 ease-in-out">
                <NavLink to="">SIGN UP</NavLink>
              </Button>
            </div>
          </div>
          {/* search bar */}
          <div className="flex flex-col mb-5 w-full h-auto">
            <div className="flex border-4 border-black h-12 bg-[#233a50] w-full">
              <div className="flex h-full w-40">
                <Select
                  onValueChange={(value) => setSelectedGenre(value)}
                  value={selectedGenre}
                  defaultValue="comedy"
                >
                  <SelectTrigger className="flex items-center border-black outline-none focus:sh min-h-full text-lg text-gray-300 rounded-none w-full">
                    <SelectValue
                      placeholder="movie type"
                      defaultValue="comedy" 
                      className="text-white"
                      />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900/30 border-black backdrop-blur-lg">
                    <SelectItem value="music">music</SelectItem>
                    <SelectItem value="drame">drame</SelectItem>
                    <SelectItem value="Comedy">Comedy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="retrouver votre film ici"
                className="w-full pl-4 outline-none"
              />
              <div className="flex w-20 justify-center items-center">
                <Search size={30} />
              </div>
            </div>
            {inputValue.length === 0 ? (
              ""
            ) : searchL.length === 0 ? (
              ""
            ) : (
              <div className="flex w-full h-auto max-h-100 overflow-y-auto absolute scrollbar-none border-4 border-black z-20 bg-[#233a50] backdrop-blur-sm border-t-0 rounded-b-md mt-12">
                <ul className="w-full h-auto *:pl-2 *:mx-2 *:rounmd">
                  {searchL.map((el, index) => (
                    <li
                      key={index}
                      className="my-2 rounded-md hover:bg-slate-900/20 py-2 cursor-pointer"
                    >
                      {el.plot}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* carousel */}
          <div className="flex flex-col w-full h-full">
            <div className="flex items-center uppercase gap-2 w-full justify-end">
              <p>follow us:</p>
              <Facebook size={20} />
              <Twitter size={20} />
              <Youtube size={20} />
              <Instagram size={20} />
            </div>
            <Carousel
              // setApi={setApi}
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 2000 })]}
              // className="w-full h-full py-4 flex "
              className="w-full max-ws py-4"
            >
              <CarouselContent className="h-full flex justify-start ml-4 min-w-full *:flex *:justify-start">
                {carouselL.length == 0
                  ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                      <CarouselItem className="h-85 max-w-75 mx-1" key={index}>
                        <Card className="h-full w-75 shadow-2xl bg-slate-950/20 group backdrop-blur-sm p-0 bottom-0 flex justify-end hover:opacity-80 duration-500 opacity-50">
                          <CardFooter className="flex flex-col gap-2 bottom-0 px-2 py-3 h-20">
                            <Skeleton className="w-full bg-gray-300 h-4" />
                            <div className="w-full text-gray-500 uppercase group-hover:text-white duration-500 text-sm flex gap-2">
                              <Skeleton className="w-1/4 bg-gray-300 h-4" />
                              {index}
                            </div>
                          </CardFooter>
                        </Card>
                      </CarouselItem>
                    ))
                  : carouselL.map((el, index) => (
                      <CarouselItem className="h-85 max-w-75 mx-1" key={index}>
                        <Card className="h-full w-75 shadow-2xl overflow-hidden bg-slate-950/20 group backdrop-blur-sm p-0 bottom-0 flex justify-end hover:opacity-80 duration-500 opacity-50">
                        <CardContent className="w-full h-full bg-white p-0">
                          <img src={el.poster || "andy.jpg"} alt="image"  className="m-0 w-full h-full object-cover"/>
                        </CardContent>
                          <CardFooter className="flex flex-col gap-2 bottom-0 px-2 py-3 h-20 absolute">
                            <p className="group-hover:text-black text-gray-500 text-start w-full">{el.title}</p>
                            <div className="w-full text-gray-500 uppercase group-hover:text-white duration-500 text-sm flex gap-2">
                              <Star size={18} />{el.imdb.rating} <br />
                            </div>
                          </CardFooter>
                        </Card>
                      </CarouselItem>
                    ))}
              </CarouselContent>
              {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
          </div>
        </header>
        {/* main1 */}
        <main className="flex w-full mt-6 ">
          <section className="w-70/100 *:mb-10">
            <section className="flex w-full gap-2 flex-col px-[2px]">
              <div className="flex w-full justify-between items-center">
                <p className="uppercase font-semibold">Comedy vibe</p>
                <p className="flex items-center cursor-pointer group *:group-hover:text-white *:duration-300">
                  <NavLink to="" className="text-gray-400">
                    view all
                  </NavLink>
                  <ChevronRight className="text-gray-400 mt-1" size={19} />
                </p>
              </div>
              <div className="flex h-60 p-2 ">
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full max-ws"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CardContent className="flex overflow-auto scrollbar-none h-full">
                    {comedyL.length == 0 ? (
                      [0, 1, 2, 3, 4].map((index) => (
                      <CarouselItem className="max-w-50 overflow-hidden" key={index}>
                        <Card className="h-full w-full shadow-2xl bg-slate-950/20 group backdrop-blur-sm p-0 bottom-0 flex justify-end hover:opacity-80 duration-500 opacity-50 ">
                          <CardFooter className="flex flex-col gap-2 bottom-0 px-2 py-3 h-20">
                            <Skeleton className="w-full bg-gray-300 h-4" />
                            <div className="w-full text-gray-500 uppercase group-hover:text-white duration-500 text-sm flex gap-2">
                              <Skeleton className="w-1/4 bg-gray-300 h-4" />

                            </div>
                          </CardFooter>
                        </Card>
                      </CarouselItem>
                    ))
                    ) : (
                      comedyL.map((el, index) => (
                        <CarouselItem
                          key={index}
                          className="overflow-hidden max-w-50"
                        >
                          <div className="flex h-full w45">
                            <Card
                              className={`bg-slate-950/20 group backdrop-blur-sm p-0 min-w-45 overflow-hidden bottom-0 flex justify-end hover:opacity-80 duration-500 opacity-50`}
                            >
                              <CardContent className="p-0 m-0 opacity-50 bg-slate-900 group-hover:opacity-100 duration-1000">
                                <img
                                  src={el.poster || "andy.jpg"}
                                  alt="image"
                                  className="w-full h-full object-cover"
                                />
                              </CardContent>
                              <CardFooter className="flex flex-col gap-1 backdrop-blur-sm w-full *:font-bold *:text-blue-600 bottom-0 px-2 pb-3 h-12 absolute opacity-100">
                                <div className="w-full text-xs text-gray-500 uppercase flex flex-col justify-end items-start group-hover:text-black duration-500">
                                  {comedyL.length == 0 ? (
                                    <Skeleton className="w-full bg-gray-300 h-4" />
                                  ) : (
                                    <p className="w-30 overflow-x-auto whitespace-nowrap scrollbar-none">
                                      {el.plot}
                                    </p>
                                  )}
                                </div>
                                <div className="w-full text-xs flex items-center gap-2 text-gray-500 uppercase group-hover:text-black duration-500">
                                  {comedyL.length == 0 ? (
                                    <Skeleton className="w-1/4 bg-gray-300 h-4" />
                                  ) : (
                                    <>
                                      <Star
                                        size={18}
                                        className="duration-500 text-yellow-300 group-hover:text-yellow-500"
                                      />
                                      {el.imdb.rating}/10
                                    </>
                                  )}
                                </div>
                              </CardFooter>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))
                    )}
                  </CardContent>
                </Carousel>
              </div>
            </section>
            <section className="flex w-full gap-2 flex-col px-[2px]">
              <div className="flex w-full justify-between items-center">
                <p className="uppercase font-semibold">music vibe</p>
                <p className="flex items-center cursor-pointer group *:group-hover:text-white *:duration-300">
                  <NavLink to="" className="text-gray-400">
                    view all
                  </NavLink>
                  <ChevronRight className="text-gray-400 mt-1" size={19} />
                </p>
              </div>
              <div className="flex h-60 p-2 ">
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full max-ws"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CardContent className="flex overflow-auto scrollbar-none h-full">
                   {musicL.length == 0 ? (
                      [0, 1, 2, 3, 4].map((index) => (
                      <CarouselItem className="max-w-50 overflow-hidden" key={index}>
                        <Card className="h-full w-full shadow-2xl bg-slate-950/20 group backdrop-blur-sm p-0 bottom-0 flex justify-end hover:opacity-80 duration-500 opacity-50">
                          <CardFooter className="flex flex-col gap-2 bottom-0 px-2 py-3 h-20">
                            <Skeleton className="w-full bg-gray-300 h-4" />
                            <div className="w-full text-gray-500 uppercase group-hover:text-white duration-500 text-sm flex gap-2">
                              <Skeleton className="w-1/4 bg-gray-300 h-4" />

                            </div>
                          </CardFooter>
                        </Card>
                      </CarouselItem>
                    ))
                    ) : (
                      musicL.map((el, index) => (
                        <CarouselItem
                          key={index}
                          className="overflow-hidden max-w-50"
                        >
                          <div className="flex h-full w45">
                            <Card
                              className={`bg-slate-950/20 group backdrop-blur-sm p-0 min-w-45 overflow-hidden bottom-0 flex justify-end hover:opacity-80 duration-500 opacity-50`}
                            >
                              <CardContent className="p-0 m-0 opacity-50 bg-slate-900 group-hover:opacity-100 duration-1000">
                                <img
                                  src={el.poster || "andy.jpg"}
                                  alt="image"
                                  className="w-full h-full object-cover"
                                />
                              </CardContent>
                              <CardFooter className="flex flex-col gap-1 backdrop-blur-sm w-full *:font-bold *:text-blue-600 bottom-0 px-2 pb-3 h-12 absolute opacity-100">
                                <div className="w-full text-xs text-gray-500 uppercase flex flex-col justify-end items-start group-hover:text-black duration-500">
                                  {comedyL.length == 0 ? (
                                    <Skeleton className="w-full bg-gray-300 h-4" />
                                  ) : (
                                    <p className="w-30 overflow-x-auto whitespace-nowrap scrollbar-none">
                                      {el.plot}
                                    </p>
                                  )}
                                </div>
                                <div className="w-full text-xs flex items-center gap-2 text-gray-500 uppercase group-hover:text-black duration-500">
                                  {comedyL.length == 0 ? (
                                    <Skeleton className="w-1/4 bg-gray-300 h-4" />
                                  ) : (
                                    <>
                                      <Star
                                        size={18}
                                        className="duration-500 text-yellow-300 group-hover:text-yellow-500"
                                      />
                                      {el.imdb.rating}/10
                                    </>
                                  )}
                                </div>
                              </CardFooter>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))
                    )}
                  </CardContent>
                </Carousel>
              </div>
              {/* <div className="flex h-60 p-2 ">
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full max-ws"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CardContent className="flex overflow-auto scrollbar-none h-full">
                    {.map((el, index) => (
                      <CarouselItem
                        key={index}
                        className="overflow-hidden max-w-50"
                      >
                        <div className="flex h-full w45">
                          <Card
                            className={`flex items-end w-full group relative p-0 opacity-80 overflow-hidden rounded-sm object-corver`}
                          >
                            <CardContent
                              className={`${el} hover:opacity-100 opacity-80 duration-500 h-full w-full p-0 m-0`}
                            ></CardContent>
                            <CardFooter className="flex flex-col gap-1  bottom-0 px-2 pb-3 h-12 absolute opacity-100">
                              <div className="w-full text-xs  text-gray-500 uppercase flex flex-col justify-end group-hover:text-white duration-500">
                                {ha !== "1" ? (
                                  <Skeleton className="w-full bg-gray-300 h-4" />
                                ) : (
                                  "votre titre mickey et andy"
                                )}
                              </div>
                              <div className="w-full text-xs flex items-center gap-2 text-gray-500 uppercase group-hover:text-white duration-500">
                                {ha !== "1" ? (
                                  <Skeleton className="w-1/4 bg-gray-300 h-4" />
                                ) : (
                                  <>
                                    <Star
                                      size={18}
                                      className="text-amber-500 duration-500 group-hover:text-yellow-500"
                                    />
                                    8.5/10
                                  </>
                                )}
                              </div>
                            </CardFooter>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CardContent>
                </Carousel>
              </div> */}
            </section>
          </section>
          <aside className="gap-4 w-30/100 pl-4">
            <div className="flex flex-col w-full">
              <div className="flex w-full mt-4 h-auto">
                <img
                  src="/sideImage.png"
                  alt="image"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col mt-5">
                <p className="text-gray-400">SPOTLIGHT CELEBRITIES</p>
                <hr className="w-[95%] text-white" />
                <div className="flex flex-col mt-2 *:mb-3">
                  <Card className="border h-16 p-0 w-[95%] rounded-xs border-none bg-transparent">
                    <CardContent className="px-0 py-[1px] flex bg-transparent h-full cursor-pointer">
                      <div className="flex w-1/4 h-full rounded-sm">
                        <img
                          src="/sideImage.png"
                          alt="image"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col w-3/4 pl-1 text-gray-200 hover:text-gray-50">
                        <p className="uppercase font-semibold">
                          le film de andy bryan
                        </p>
                        <span className="text-sm -mt-1 text-gray-300">
                          acteur
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border h-16 p-0 w-[95%] rounded-xs border-none bg-transparent">
                    <CardContent className="px-0 py-[1px] flex bg-transparent h-full cursor-pointer">
                      <div className="flex w-1/4 h-full rounded-sm">
                        <img
                          src="/sideImage.png"
                          alt="image"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col w-3/4 pl-1 text-gray-200 hover:text-gray-50">
                        <p className="uppercase font-semibold">
                          le film de andy bryan
                        </p>
                        <span className="text-sm -mt-1 text-gray-300">
                          acteur
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </aside>
        </main>
        {/* <main className="w-full flex">
          <div className="w-7/10 h-100 bg-black">
            <video src="#"></video>
          </div>
          <div className="w-3/10">
            <Carousel orientation="vertical" className=" relative border h-full">
              <CarouselContent>a</CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </main> */}
        <main className="w-full flex my-5">
          <section className="w-7/10 flex min-h-150 flex-col">
            <div className="w-full h-full *:mb-5">
              <div className="flex w-full">
                <img
                  src="/main3.png"
                  alt="main3"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex h-full">
                <div className="flex w-2/10 h-60 rounded-sm overflow-hidden">
                  <img
                    src="/andy.jpg"
                    alt="main3.2"
                    className="object-cover w-full"
                  />
                </div>
                <div className="flex flex-col w-8/10 pl-4 gap-4 text-gray-400">
                  <h2 className="uppercase text-xl font-bold">name of star</h2>
                  <span className="text-xs">age de la star</span>
                  <p>
                    description de la star Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsam tempora, doloribus ad
                    incidunt labore corrupti beatae esse ratione unde inventore.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-wrap justify-between">
              <Card className="p-0 bg-transparent text-gray-400 w-3/7 border-none rounded-none overflow-hidden flex-row">
                <CardContent className="p-0 flex h-full">
                  <div className="w-1/4 h-3/4">
                    <img src="/andy.jpg" alt="image" />
                  </div>
                  <div className=" w-3/4 pl-4">
                    <p className="text-lg ">dasdsaj jas ndjask dasjdkasd</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          <aside className="w-3/10 flex flex-col justify-between pl-4 text-gray-400">
            <div className="w-full">
              <p className="uppercase cursor-pointer">find in Facebook</p>
              <hr className="w-[95%]" />
            </div>
            <div className="w-full gap-2">
              <p className="uppercase flex cursor-pointer">
                tweet to us
                <ChevronRight />
              </p>
              <hr className="w-[95%]" />
            </div>
          </aside>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

// const [email, setEmail] = useState<string>("");
//   const [selectedGenre, setSelectedGenre] = useState<string>("Comedy");
//   const [DB, setDB] = useState<Movie[]>(() => {
//     try {
//       const db = localStorage.getItem("DB");
//       return db ? JSON.parse(db) : [];
//     } catch {
//       return [];
//     }
//   });
//   useEffect(() => {
//     localStorage.setItem("DB", JSON.stringify(DB));
//   }, [DB]);
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//   };
//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };
//   useEffect(() => {
//     const get = async () => {
//       const res = await fetch(
//         `https://backend-movie-api-afne.onrender.com/movies/filter?page=1&limit=50&column=genres&value=${selectedGenre}`
//       );
//       const livres = await res.json();
//       const LesLivres = livres.data;
//       console.log(LesLivres);
//       setDB(LesLivres);
//     };
//     get();
//   }, [selectedGenre]);
//   const [searchL, setSearchL] = useState<Movie[]>(() => {
//     try {
//       const laliste = DB.filter((livre) => livre.plot == inputValue);
//       return laliste ? laliste : [];
//     } catch {
//       return [];
//     }
//   });
//   console.log();

//   const [api, setApi] = useState<CarouselApi>();
//   useEffect(() => {
//     if (!api) return;
//     api.on("select", () =>
//       console.log("slide active", api.selectedScrollSnap())
//     );
//   }, [api]);
//   const ha = "1";
