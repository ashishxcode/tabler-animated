"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 16v-5a2 2 0 1 0 -4 0"}],["path",{"d":"M15 16v-5a2 2 0 1 1 4 0"}],["path",{"d":"M12 16v-10a3 3 0 0 1 6 0"}],["path",{"d":"M6 6a3 3 0 0 1 6 0"}],["path",{"d":"M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,4],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,12.5],[17,12.5],[9,4.5]]}];

export const FountainIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FountainIcon.displayName = "FountainIcon";
