"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.5 17h-8.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1"}],["path",{"d":"M9 17v1a3 3 0 0 0 3 3"}],["path",{"d":"M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M17 21l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"swing","n":[0],"o":[11,4],"a":12},{"fx":"tilt","n":[1],"o":[10.5,18],"a":7,"dl":0.07}];

export const BellCancelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BellCancelIcon.displayName = "BellCancelIcon";
