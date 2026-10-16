"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4.731 19h11.539a1 1 0 0 0 .866 -1.5l-5.769 -10a1 1 0 0 0 -1.732 0l-5.769 10a1 1 0 0 0 .865 1.5"}],["path",{"d":"M2 13h4.45"}],["path",{"d":"M18 5l-4.5 6"}],["path",{"d":"M22 9l-7.75 3.25"}],["path",{"d":"M22 15l-7 -1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[10.5,13],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[4.22,13],[15.75,8],[18.13,10.63],[18.5,14.25]]}];

export const PrismLightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PrismLightIcon.displayName = "PrismLightIcon";
