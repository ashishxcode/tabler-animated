"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8.5 13.5l-1.5 -1.5l1.5 -1.5"}],["path",{"d":"M15.5 10.5l1.5 1.5l-1.5 1.5"}],["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M13 9.5l-2 5.5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[7.75,12],"d":[-1.8,0]},{"fx":"nudge","n":[1,2,3],"o":[12,12],"d":[1.8,0]}];

export const CodeCircle2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CodeCircle2Icon.displayName = "CodeCircle2Icon";
