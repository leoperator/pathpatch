import { create } from 'zustand';
import networkData from '../data/network-nodes.json';

interface Coordinate {
  longitude: number;
  latitude: number;
}

interface Node {
  id?: string;
  name: string;
  coordinates: [number, number];
}

interface RouteInfo {
  truckId: string;
  destination: Node;
  stops: Node[];
  routeGeometry?: any;
  status: 'Pending' | 'In Transit' | 'Completed'; // Added status tracking
}

interface LogisticsState {
  hub: Node;
  routes: RouteInfo[];
  activeTrucks: Record<string, Coordinate>;
  updateTruckPosition: (truckId: string, coord: Coordinate) => void;
  setRouteGeometry: (truckId: string, geometry: any) => void;
  addTruck: (truck: RouteInfo) => void;
  removeTruck: (truckId: string) => void;
  setHub: (hub: Node) => void;
  clearFleet: () => void;
}

// Map the initial JSON data to include a default 'In Transit' status
const initialRoutes = (networkData.routes as unknown as RouteInfo[]).map(route => ({
  ...route,
  status: 'In Transit' as const
}));

export const useLogisticsStore = create<LogisticsState>((set) => ({
  setHub: (hub) => set(() => ({ hub })),
  clearFleet: () => set(() => ({ routes: [] })),
  hub: networkData.hub as unknown as Node,
  routes: initialRoutes,
  activeTrucks: {},
  updateTruckPosition: (truckId, coord) =>
    set((state) => ({
      activeTrucks: {
        ...state.activeTrucks,
        [truckId]: coord,
      },
    })),
  setRouteGeometry: (truckId, geometry) =>
    set((state) => ({
      routes: state.routes.map((route) =>
        route.truckId === truckId ? { ...route, routeGeometry: geometry } : route
      ),
    })),
  addTruck: (truck) => 
    set((state) => ({
      routes: [...state.routes, truck]
    })),
  removeTruck: (truckId) =>
    set((state) => ({
      routes: state.routes.filter((route) => route.truckId !== truckId)
    })),
}));