import Footer from "@/components/mine/Footer";
import Formulaire from "@/components/mine/Formulaire";
import Login from "@/components/mine/Login";
import MoviePagination from "@/components/mine/Pagination";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
  LayoutDashboard,
  List,
  Search,
  Star,
} from "lucide-react";
import { useEffect, useState, type ChangeEvent } from "react";
import { NavLink } from "react-router-dom";

interface Movie {
  title: string;
  poster: string;
  imdb: { rating: number };
  plot: string;
}
// interface Paginations {
//   totalPages: number,

// }
export default function Movies() {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [searchL, setSearchL] = useState<Movie[]>([]);
  const [movieL, setMovieL] = useState<Movie[]>([]);
  const [paginationvalue, setPaginationValue] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

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

useEffect(() => {
  const getBibliotheque = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://backend-movie-api-afne.onrender.com/movies?page=${paginationvalue}&limit=10`
      );
      const resJson = await res.json();
      setMovieL(resJson.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  getBibliotheque();
}, [paginationvalue]);


  const handleToggleSignMode = () => {
    setIsForSign((prev) => !prev);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const [isForSign, setIsForSign] = useState<boolean>(false)
  return (
    <div className="flex flex-col w-full pb-2 h-screen">
      <div className="flex flex-col w-full px-2 overflow-y-auto h-full scrollbar-none relative  ">
        {/* header */}
        <header className='w-full h-auto bg-[url("/header.jpg")] flex flex-col relative'>
          {/* nav bar */}
          <div className="flex justify-between items-center my-5 bg-transparent ">
            <img src="/iconeHeader.png" alt="logo" />
            <div className="flex gap-2">
              <NavigationMenu>
                <NavigationMenuList className="gap-4 *:text-md *:font-semibold *:uppercase *:hover:text-white *:text-gray-300 *:hover:underline *:hover:underline-offset-8 *:duration-500">
                  <NavigationMenuItem>
                    <NavLink className={({ isActive }: { isActive: boolean }) => isActive ? "text-white underline underline-offset-8":""} to="/">home</NavLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavLink className={({ isActive }: { isActive: boolean }) => isActive ? "text-white underline underline-offset-8":""} to="/movies">movies</NavLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavLink className={({ isActive }: { isActive: boolean }) => isActive ? "text-white underline underline-offset-8":""} to="/celebrities">celebrities</NavLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavLink className={({ isActive }: { isActive: boolean }) => isActive ? "text-white underline underline-offset-8":""} to="/news">news</NavLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavLink className={({ isActive }: { isActive: boolean }) => isActive ? "text-white underline underline-offset-8":""} to="/commity">community</NavLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex gap-2 *:text-gray-300">
              <Dialog>
                <DialogTrigger className="bg-transparent rounded-full h-8 w-20 hover:scale-105 hover:bg-red-700 transition cursor-pointer duration-300 ease-in-out">LOG IN</DialogTrigger>
                <DialogContent className="min-w-200 h-100 bg-sky-950 backdrop-blur-md border-none shadow-2xl">
                  <Login isForSign={false} onToggleSignMode={handleToggleSignMode} />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger className="bg-red-700 rounded-full h-8 w-20 hover:scale-105 hover:bg-transparent transition cursor-pointer duration-300 ease-in-out">SIGN UP</DialogTrigger>
                <DialogContent className="min-w-200 bg-sky-950 backdrop-blur-md border-none shadow-2xl">
                  <Login isForSign={true} onToggleSignMode={handleToggleSignMode} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {/* search bar */}
          <div className="flex flex-col mb-5 w-full h-auto">
            <div className="flex border-4 border-black h-12 bg-[#233a50] w-full">
              <div className="flex h-full w-40">
                <Select
                  onValueChange={(value) => setSelectedGenre(value)}
                  value={selectedGenre}
                >
                  <SelectTrigger className="flex items-center border-black outline-none focus:sh min-h-full text-lg text-gray-300 rounded-none w-full">
                    <SelectValue
                      placeholder="movie type"
                      defaultValue={selectedGenre}
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
          <div className="flex flex-col items-center justify-center h-60">
            <h1 className="text-3xl text-gray-400 uppercase font-bold mb-4">
              movie listing-list
            </h1>
            <p className="flex gap-2 items-center">
              <span className="text-[#4280bf]">home</span>
              <ChevronRight size={17} className="mt-1" />
              <span>movie listing</span>
            </p>
          </div>
        </header>
        <main className="w-full flex justify-between mt-5">
          <section className="flex flex-col w-7/10">
            {/* rectangle de debut de session */}
            <div className="flex border w-full items-center h-6">
              <div className="flex justify-between w-1/2 text-gray-400 border-r px-1">
                <p>
                  Found <span className="text-[#4280bf]">1,608</span> movies in
                  total
                </p>
                <p>sort by: </p>
              </div>
              <div className="flex w-1/2 h-full ">
                <Select
                  onValueChange={(value) => setSelectedGenre(value)}
                  value={selectedGenre}
                >
                  <SelectTrigger className="w-6/7 outline-none rounded-none border-none max-h-full text-white">
                    <SelectValue
                      defaultValue={selectedGenre}
                      placeholder="ratisloting descending"
                      className="text-white"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-transparents border-gray-400 backdrop-blur-md">
                    <SelectItem value="ratisloting descending">
                      ratisloting descending
                    </SelectItem>
                    <SelectItem value="popularity descending">
                      popularity descending
                    </SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex justify-between w-1/7 items-center border-l-[1px] border-gray-400 h-full px-[1px]">
                  <List size={20} className="cursor-pointer" />
                  <LayoutDashboard size={20} className="cursor-pointer" />
                </div>
              </div>
            </div>
            {/* section movie */}
            <div className="flex flex-col w-full min-h-100 mt-5 *:my-2 max-h-250 overflow-auto scrollbar-none">
              {loading 
                ? [1, 2, 3, 4, 5].map((index) => (
                    <Card
                      className="flex flex-row min-h-50 gap-0 p-0 bg-transparent border-none rounded-none"
                      key={index}
                    >
                      <div className="flex h-full w-2/10">
                        <Skeleton className="w-full h-full rounded-none bg-[#4280bf] backdrop-blur-lg" />
                      </div>
                      <div className="flex flex-col justify-between pb-4 w-8/10 h-full text-gray-400">
                        <CardHeader>
                          <CardTitle className="gap-2">
                            <Skeleton className="w-[80%] h-4 mb-2 rounded-l-none bg-[#4280bf] mt-2" />
                            <Skeleton className="w-[10%] h-2 rounded-l-none bg-[#4280bf]" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pl-6">
                          <Skeleton className="w-full h-4 mb-3 rounded-l-none bg-[#4280bf]" />
                          <Skeleton className="w-full h-4 mb-3 rounded-l-none bg-[#4280bf]" />
                          <Skeleton className="w-full h-4 mb-3 rounded-l-none bg-[#4280bf]" />
                        </CardContent>
                        <CardFooter>
                          <Skeleton className="w-[90%] h-4 rounded-l-none bg-[#4280bf]" />
                        </CardFooter>
                      </div>
                    </Card>
                  ))
                : movieL.map((el, index) => (
                    <Card
                      className="flex flex-row min-h-60 gap-0 p-0 bg-transparent min-w-35 rounded-none border-none"
                      key={index}
                    >
                      <div className="flex h-full min-w-2/10">
                        <img
                          src={el.poster || "/andy.jpg"}
                          alt="andy"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-between pb-4 w-8/10 h-full text-gray-400">
                        <CardHeader>
                          <CardTitle>
                            <p className="text-xl uppercase text-white">
                              {el.title}
                            </p>
                            <p className="flex gap-2 items-center text-xs">
                              <Star size={16} /> {el.imdb.rating}/10
                            </p>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pl-6">{el.plot}</CardContent>
                        <CardFooter>
                          principal actor: andy yvan la famille
                        </CardFooter>
                      </div>
                    </Card>
                  ))}
            </div>
          </section>
          <aside className="flex flex-col w-3/10 pl-8">
            {isForSign == true ? <Formulaire />:''}
            <div className="flex my-5">
              <img src="/sideImage.png" alt="image" />
            </div>
            <div className="flex w-full flex-col  justify-between h-full">
              <div className="flex w-full flex-col">
                <h1 className="text-xl text-gray-400">FIND IN FACEBOOK</h1>
                <hr className="w-full" />
              </div>
              <div className="flex w-full flex-col mb-6">
                <h1 className="text-xl text-gray-400 flex gap-1 items-center">
                  tweet to us <ChevronRight size={17} className="mt-2" />
                </h1>
                <hr className="w-full" />
              </div>
            </div>
          </aside>
        </main>
        <main className="flex justify-center items-center mt-10 duration-1000">
          {/* <Pagination>
            <PaginationPrevious
              className="hover:bg-[#4280bf] cursor-pointer duration-300 transition-colors ease-in-out items-center h-8 mx-2"
              onClick={() =>
                paginationvalue > 1 && setPaginationValue(paginationvalue - 1)
              }
            /> */}
            {/* <PaginationContent>
              {paginationvalue}
            </PaginationContent>
            <PaginationNext
              className="hover:bg-[#4280bf] cursor-pointer duration-300 transition-colors ease-in-out items-center h-8 mx-2"
              onClick={() =>
                paginationvalue < 121 && setPaginationValue(paginationvalue + 1)
              }
            />
          </Pagination> */}

          <MoviePagination paginationvalue={paginationvalue} setPaginationValue={setPaginationValue} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
