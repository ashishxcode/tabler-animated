"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 15h5v7l-2.5 -1.5l-2.5 1.5l0 -7"}],["path",{"d":"M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[11.5,12],"a":0.1},{"fx":"pop","n":[0,2],"o":[15,17.5],"a":0.3,"dl":0.12}];

export const HomeRibbonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeRibbonIcon.displayName = "HomeRibbonIcon";
