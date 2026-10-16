"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"}],["path",{"d":"M12 2l0 2"}],["path",{"d":"M12 20l0 2"}],["path",{"d":"M20 12l2 0"}],["path",{"d":"M2 12l2 0"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5],"o":[12,22],"d":[0,-2.2]}];

export const CurrentLocationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrentLocationIcon.displayName = "CurrentLocationIcon";
