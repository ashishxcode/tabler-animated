"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 6a5 3 0 1 0 10 0a5 3 0 1 0 -10 0"}],["path",{"d":"M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"}],["path",{"d":"M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"}],["path",{"d":"M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"}],["path",{"d":"M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}],["path",{"d":"M5 15v1m0 -8v1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[16,12],"a":0.06},{"fx":"pop","n":[4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,12],[5,12]]}];

export const BusinessplanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BusinessplanIcon.displayName = "BusinessplanIcon";
