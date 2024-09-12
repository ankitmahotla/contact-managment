import CaseFluctuations from "../components/case-fluctuations";
import MapWithMarkers from "../components/map-with-markers";

export default function Charts() {
    return (
        <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">COVID-19 Dashboard</h1>
        <div className="mb-8">
          <CaseFluctuations />
        </div>
        <div>
          <MapWithMarkers />
        </div>
      </div>
    )
}