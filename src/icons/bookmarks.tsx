"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3"}],["path",{"d":"M11 3h5a3 3 0 0 1 3 3v11"}]];
const rig: Rig[] = [{"fx":"swing","n":[0,1],"o":[12,4],"a":7}];

export const BookmarksIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BookmarksIcon.displayName = "BookmarksIcon";
