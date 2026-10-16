"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 8a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M8 11a5 5 0 1 0 3.998 1.997"}],["path",{"d":"M12.002 19.003a5 5 0 1 0 3.998 -8.003"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06}];

export const FiltersIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FiltersIcon.displayName = "FiltersIcon";
