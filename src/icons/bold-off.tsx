"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 5h4a3.5 3.5 0 0 1 2.222 6.204m-3.222 .796h-5v-5"}],["path",{"d":"M17.107 17.112a3.5 3.5 0 0 1 -3.107 1.888h-7v-7"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"draw","n":[0,1],"o":[12.05,12],"st":0.07}];

export const BoldOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoldOffIcon.displayName = "BoldOffIcon";
