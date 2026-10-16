"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v8.5"}],["path",{"d":"M9 4v13"}],["path",{"d":"M15 7v8"}],["path",{"d":"M19 16v6"}],["path",{"d":"M22 19l-3 3l-3 -3"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4],"o":[12.5,22],"d":[0,-2.2]}];

export const MapDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapDownIcon.displayName = "MapDownIcon";
