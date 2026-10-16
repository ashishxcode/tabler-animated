"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 20l-.975 -.966l-6.525 -6.462a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.37 5.428"}],["path",{"d":"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M20.2 20.2l1.8 1.8"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[18.5,18.5],"a":0.35,"dl":0.2},{"fx":"beat","n":[0],"o":[11.99,11.99]}];

export const HeartSearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HeartSearchIcon.displayName = "HeartSearchIcon";
