import { useContext, useEffect, useState } from "react";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { DoggosContext } from "../../context/context";
import { motion } from "framer-motion"
import {
  DoggosRandomImageApi,
  DoogosByBreedApi,
} from "../../services/api/Apis";
import DoggosImg from "../DoggosImg/DoggosImg";
import "./dogsContainer.css";
import PolicyIcon from "@mui/icons-material/Policy";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PetsIcon from "@mui/icons-material/Pets";
import DoggosSkeleton from "../Skeleton/Skeleton";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import Form from "../modal/Form";
import { Link } from "react-router-dom";

const DogsContainer = () => {
  const [doggosResult, setDoggosResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState(false);
  const [filterData, setFilterData] = useState({ limit: 12 });
  const { doggosBreed, dispatch, loading, filteredData } =
    useContext(DoggosContext);


  const handleFormTypeChange = (type) => {
    dispatch({ type: "setFormType", payload: type })
  }




  useEffect(() => {
    if (doggosBreed) {
      setSearchQuery(true);
      if (doggosBreed === "Random") {
        fetchRandomDoggos(30);
        return;
      }
      fetchDoggosByBreedFunc(doggosBreed);
    } else {
      fetchRandomDoggos(30);
      setSearchQuery(false);
    }
  }, [doggosBreed]);

  useEffect(() => {
    dispatch({ type: "set_filter_item", payload: filterData });
  }, [filterData]);

  useEffect(() => {
    if (doggosResult) {
      dispatch({
        type: "setdoggosData",
        payload: { length: doggosResult.length, data: doggosResult },
      });
    }
  }, [doggosResult]);

  const fetchDoggosByBreedFunc = async (breed) => {
    try {
      dispatch({ type: "setLoading", payload: true });
      const { data } = await DoogosByBreedApi(breed);
      dispatch({ type: "setLoading", payload: false });
      setDoggosResult(data.message);
    } catch (error) {
      console.log("some error occured");
      setDoggosResult([]);
      dispatch({
        type: "setError",
        payload: "Error while fetching the doggos data ...",
      });
    }
  };
  const fetchRandomDoggos = async (limit) => {
    try {
      dispatch({ type: "setLoading", payload: true });
      const { data } = await DoggosRandomImageApi(limit);
      setDoggosResult(data.message);
      dispatch({ type: "setLoading", payload: false });
    } catch (error) {
      console.log(error);
      setDoggosResult([]);
      dispatch({
        type: "setError",
        payload: "Error while fetching the doggos data ...",
      });
    }
  };


  return (
    <div className="dogsContainer">
      <motion.div
        initial={{ opacity: 0.3, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="filter_row ">
        <Link



          to={"adopt&release"} onClick={() => handleFormTypeChange("Release")}>
          <motion.div className="filteredRow_item1 filterItems">
            <NewReleasesIcon className="mainIcons" /> <span>Release Pet</span>
          </motion.div>
        </Link>
        <Link to={"adopt&release"} onClick={() => handleFormTypeChange("DogForAdoption")}>
          <motion.div className="filteredRow_item1 filterItems">
            <PetsIcon className="mainIcons" />
            <span> Adopt Pet</span>
          </motion.div>
        </Link>
        <motion.div className="filter_row_text filterItems">
          <PolicyIcon className="mainIcons" />{" "}
          <span>{doggosResult.length} results Found </span>{" "}
        </motion.div>
        <motion.div className="filter_row_limit filterItems">
          <FormatListNumberedIcon className="mainIcons" />
          <span>Doggos Per page</span>
          <div className="limitBox">
            <input
              type="number"
              value={filterData?.limit}
              className="limit"
              onChange={(e) =>
                setFilterData((prev) => ({ ...prev, limit: +e.target.value }))
              }
            />
          </div>
        </motion.div>
      </motion.div>
      <div className="doggos_result">
        {loading ? (
          <DoggosSkeleton />
        ) : filteredData ? (
          filteredData.map((item, index) => <DoggosImg number={index} key={item} image={item} />)
        ) : (
          doggosResult.slice(0, filterData.limit ? filterData.limit : 12).map((item, index) => <DoggosImg number={index} key={item} image={item} />)
        )}
      </div>
    </div>
  );
};

export default DogsContainer;
