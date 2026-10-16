"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.933 5h-6.933v16h13v-8"}],["path",{"d":"M14 17h-5"}],["path",{"d":"M9 13h5v-4h-5v4"}],["path",{"d":"M15 5v-2"}],["path",{"d":"M18 6l2 -2"}],["path",{"d":"M19 9h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.5,13],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.5,17],[11.5,11],[15,4],[19,5],[20,9]]}];

export const Ad2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Ad2Icon.displayName = "Ad2Icon";
