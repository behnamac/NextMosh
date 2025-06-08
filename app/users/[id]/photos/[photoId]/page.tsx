import React from "react";

interface Params {
  params: { id: number; photoId: number };
}

const PhotoPage = ({ params: { id, photoId } }: Params) => {
  return (
    <div>
      PhotoPage {id} {photoId}
    </div>
  );
};

export default PhotoPage;
