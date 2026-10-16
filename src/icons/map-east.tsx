"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M14 9h-4v6h4"}],["path",{"d":"M10 12h2.5"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12,21],"d":[0,-2.2]}];

export const MapEastIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapEastIcon.displayName = "MapEastIcon";
