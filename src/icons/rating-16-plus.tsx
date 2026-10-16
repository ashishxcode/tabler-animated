"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M10 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"}],["path",{"d":"M7 15v-6"}],["path",{"d":"M15.5 12h3"}],["path",{"d":"M17 10.5v3"}],["path",{"d":"M10 13.5v-3a1.5 1.5 0 0 1 1.5 -1.5h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.5,13.5],[7,12],[17,12],[17,12],[11.25,11.25]]}];

export const Rating16PlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Rating16PlusIcon.displayName = "Rating16PlusIcon";
