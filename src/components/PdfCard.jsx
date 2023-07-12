import { Card, CardFooter, Button } from "@material-tailwind/react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfCard({ info }) {
  return (
    <Card
      color="blue"
      variant="gradient"
      className="w-full md:w-1/3 lg:w-1/4  p-1 my-5 mx-4 flex"
    >
      <CardFooter className="flex flex-col h-full p-1">
        <a
          href={`https://cots-strapi-production.up.railway.app/${info.url}`}
          className="flex flex-col h-full"
        >
          <Button
            size="lg"
            color="white"
            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100 flex-[1_0_auto] px-3 py-2"
            ripple={false}
            fullWidth={true}
          >
            <Document
              className="flex justify-center w-full"
              file={`https://cots-strapi-production.up.railway.app/${info.url}`}
            >
              <Page
                pageNumber={1}
                scale={0.25}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
            <span className="block mt-3 text-xl ">{info.name}</span>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
