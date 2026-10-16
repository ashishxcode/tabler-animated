"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 8l3 -3l3 3"}],["path",{"d":"M3 16l3 3l3 -3"}],["path",{"d":"M6 5l0 14"}],["path",{"d":"M13 6l7 0"}],["path",{"d":"M13 12l7 0"}],["path",{"d":"M13 18l7 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,3,4,5],"o":[11.5,12],"st":0.07},{"fx":"pop","n":[2],"o":[6,12],"a":0.04}];

export const LineHeightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LineHeightIcon.displayName = "LineHeightIcon";
