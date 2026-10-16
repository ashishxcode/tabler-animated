"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0"}],["path",{"d":"M11 12h-3"}],["path",{"d":"M8 12l-5 -4v8l5 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[16,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[9.5,12],[5.5,12]]}];

export const GenderThirdIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderThirdIcon.displayName = "GenderThirdIcon";
