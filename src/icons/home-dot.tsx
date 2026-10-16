"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5"}],["path",{"d":"M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12.5,22],"d":[0,-1.8]}];

export const HomeDotIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeDotIcon.displayName = "HomeDotIcon";
