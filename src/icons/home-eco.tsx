"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215"}],["path",{"d":"M16 22s0 -2 3 -4"}],["path",{"d":"M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12.5,22],"d":[0,-1.8]}];

export const HomeEcoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeEcoIcon.displayName = "HomeEcoIcon";
