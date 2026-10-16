"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.797 19.595l-2.797 -5.595l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.548 9.826"}],["path",{"d":"M16 21l5 -5"}],["path",{"d":"M21 21v.01"}],["path",{"d":"M16 16v.01"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[11.84,21.01],"d":[0,-2.2]}];

export const LocationDiscountIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LocationDiscountIcon.displayName = "LocationDiscountIcon";
