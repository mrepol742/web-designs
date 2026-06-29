export default function PropertyCard({ property }) {
  const { image, price, address, city, beds, baths, sqft, status, slug } =
    property;

  return (
    <div
      data-aos="zoom-in"
      className="bg-white rounded-sm shadow-md overflow-hidden card-hover border border-gray-100"
    >
      {/* Image Placeholder */}
      <div className="relative h-56 bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center">
        <div className="text-center">
          <svg
            className="w-12 h-12 text-navy-300 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0v-6a1 1 0 011-1h2a1 1 0 011 1v6m-6 0h6"
            />
          </svg>
          <span className="text-navy-400 text-sm">
            {image || "Property Photo"}
          </span>
        </div>
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className={status === "For Sale" ? "badge-sale" : "badge-rent"}>
            {status}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        <div className="text-gold-600 font-serif text-2xl font-bold mb-1">
          {price}
        </div>
        <h3 className="text-navy-900 font-semibold text-lg mb-1">{address}</h3>
        <p className="text-gray-500 text-sm mb-4">{city}</p>

        <div className="flex items-center space-x-4 text-sm text-gray-600 border-t border-gray-100 pt-4">
          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4 text-navy-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h6"
              />
            </svg>
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4 text-navy-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg
              className="w-4 h-4 text-navy-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            <span>{sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}
