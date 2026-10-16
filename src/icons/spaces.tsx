"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6.045 9.777a6 6 0 1 0 5.951 .023"}],["path",{"d":"M11.997 20.196a6 6 0 1 0 -2.948 -5.97"}],["path",{"d":"M17.95 9.785q .05 -.386 .05 -.785a6 6 0 1 0 -3.056 5.23"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06}];

export const SpacesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SpacesIcon.displayName = "SpacesIcon";
