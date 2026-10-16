"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v8.5"}],["path",{"d":"M9 4v13"}],["path",{"d":"M15 7v8"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"hop","n":[0,1,2],"o":[12,20],"d":[0,-2.2]}];

export const MapPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapPlusIcon.displayName = "MapPlusIcon";
