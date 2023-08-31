import {   Route, Routes} from "react-router-dom";
import { MovieList, MovieDetails, Search, ErrorPage, BookingFooter, MarketplaceFooter, PrivacyPolicyFooter,TermsAndCondition } from "../pages";
export default function AllRoutes() {

  return (
    <div className="dark:bg-ourColor">
    <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home"/>}/>
        <Route path="movie/:id" element={<MovieDetails />}/>
        <Route path="movie/popular" element={<MovieList apiPath="movie/popular" title="Popular"/>}/>
        <Route path="movie/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>}/>
        <Route path="movie/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upocoming"/>}/>
        <Route path="search" element={<Search apiPath="search/movie" />}/>
        <Route path="*" element={<ErrorPage />}/>
        <Route path="booking" element={<BookingFooter />} />
        <Route path="marketplace" element={<MarketplaceFooter />} />
        <Route path="privacy-policy" element={<PrivacyPolicyFooter />} />
        <Route path="terms-conditions" element={<TermsAndCondition />} />

    </Routes>
    </div>
  )
}
