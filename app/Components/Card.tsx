import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className="p-4">
      {/* Main div Of Card Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/image1.png"
            alt="image1"
            height={300}
            width={300}
            className="rounded-md"
          />
          <p className="text-center mt-2">DipaInhouse</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/image2.png"
            alt="image2"
            height={300}
            width={300}
            className="rounded-md"
          />
          <p className="text-center mt-2">Ronas IT UI/UX Team</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/image3.png"
            alt="image3"
            height={300}
            width={300}
            className="rounded-md"
          />
          <p className="text-center mt-2">DipaInhouse</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/image4.png"
            alt="image4"
            height={300}
            width={300}
            className="rounded-md"
          />
          <p className="text-center mt-2">DipaInhouse</p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/image5.png"
            alt="image5"
            height={300}
            width={300}
            className="rounded-md"
          />
          <p className="text-center mt-2">Ronas IT UI/UX Team</p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/image6.png"
            alt="image6"
            height={300}
            width={300}
            className="rounded-md"
          />
          <p className="text-center mt-2">DipaInhouse</p>
        </div>
      </div>
    </div>
  )
}

export default Card
