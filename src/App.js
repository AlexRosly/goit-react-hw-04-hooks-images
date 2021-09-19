// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchImage } from "./services/api-services";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import SearchBar from "./components/SearchBar/SearchBar";
import Modal from "./components/Modal/Modal";
import Loader from "react-loader-spinner";

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState("");
  const [error, setError] = useState(null);

  //If in update query prevState not equal state make a fetch

  // async componentDidUpdate(_, prevState) {
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     getImages();
  //   }
  // }

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  //Write query in state

  const handeleFormSubmit = (query) => {
    if (query.trim() === "") {
      toast.error("Please enter correct query and try again.");
      return;
    }
    setImages([]);
    setPage(1);
    setSearchQuery(query);
    setError(null);
  };

  const getImages = async () => {
    setIsLoading(true);

    try {
      const { hits } = await fetchImage(searchQuery, page);
      setImages([...images, ...hits]);
      setPage((page) => page + 1);
      if (page !== 1) {
        scrollOnLoadButton();
      }
    } catch (error) {
      console.log("Error", error);
      setError({ error });
    } finally {
      setIsLoading(false);
    }
  };

  //Get full image, write in state and open modal window

  const handelGalleryImage = (largeImage) => {
    setLargeImage(largeImage);
    setShowModal(true);
  };

  //Modal toggle

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  //Scroll on click on the button

  const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  // const { images, showModal, largeImage, isLoading } = this.state;
  const loadMore = images.length > 0 && images.length >= 12;
  return (
    <>
      <Toaster position="top-right" />
      <SearchBar onSeacrh={handeleFormSubmit} />
      <ImageGallery images={images} getGalleryElement={handelGalleryImage} />
      {loadMore && <Button onClick={getImages}>Load more</Button>}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImage} alt="" />
        </Modal>
      )}
      {isLoading && <Loader />}
    </>
  );
}

// Old version on class before refactoring

// class App extends Component {
//   state = {
//     images: [],
//     page: 1,
//     searchQuery: "",
//     isLoading: false,
//     showModal: false,
//     largeImage: "",
//     error: null,
//   };

//   //If in update query prevState not equal state make a fetch

//   async componentDidUpdate(_, prevState) {
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.getImages();
//     }
//   }

//   //Write query in state

//   handeleFormSubmit = (query) => {
//     if (query.trim() === "") {
//       toast.error("Please enter correct query and try again.");
//       return;
//     }

//     this.setState({
//       images: [],
//       page: 1,
//       searchQuery: query,
//       error: null,
//     });
//   };

//   getImages = async () => {
//     const { searchQuery, page } = this.state;

//     this.setState({
//       isLoading: true,
//     });

//     try {
//       const { hits } = await fetchImage(searchQuery, page);

//       this.setState((prevState) => ({
//         images: [...prevState.images, ...hits],
//         page: prevState.page + 1,
//       }));

//       if (page !== 1) {
//         this.scrollOnLoadButton();
//       }
//     } catch (error) {
//       console.log("Error", error);
//       this.setState({ error });
//     } finally {
//       this.setState({
//         isLoading: false,
//       });
//     }
//   };

// //Get full image, write in state and open modal window

//   handelGalleryImage = (largeImage) => {
//     this.setState({
//       largeImage: largeImage,
//       showModal: true,
//     });
//   };

//   //Modal toggle

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//       largeImage: "",
//     }));
//   };

//   // Скролл при клике на кнопку
//   //Scroll on click on the button

//   scrollOnLoadButton = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     });
//   };

//   render() {
//     const { images, showModal, largeImage, isLoading } = this.state;
//     const loadMore = images.length > 0 && images.length >= 12;
//     return (
//       <>
//         <Toaster position="top-right" />
//         <SearchBar onSeacrh={this.handeleFormSubmit} />
//         <ImageGallery
//           images={images}
//           getGalleryElement={this.handelGalleryImage}
//         />
//         {loadMore && <Button onClick={this.getImages}>Load more</Button>}
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={largeImage} alt="" />
//           </Modal>
//         )}
//         {isLoading && <Loader />}
//       </>
//     );
//   }
// }

// export default App;
